# Optional QA-only trust store for the environment proxy; no TLS bypass.
import ctypes as c,os
root=os.environ.get('P27_TRUST_HOME','/tmp/p27-browser-home');os.makedirs(root+'/.pki/nssdb',exist_ok=True)
n=c.CDLL('libnss3.so');sm=c.CDLL('libsmime3.so');n.NSS_InitReadWrite.argtypes=[c.c_char_p];n.NSS_InitReadWrite.restype=c.c_int
print('init',n.NSS_InitReadWrite(('sql:'+root+'/.pki/nssdb').encode()))
n.PK11_GetInternalKeySlot.restype=c.c_void_p;n.PK11_InitPin.argtypes=[c.c_void_p,c.c_char_p,c.c_char_p];print('pin',n.PK11_InitPin(n.PK11_GetInternalKeySlot(),None,b''))
sm.CERT_DecodeCertFromPackage.argtypes=[c.c_char_p,c.c_int];sm.CERT_DecodeCertFromPackage.restype=c.c_void_p
class Trust(c.Structure):_fields_=[('sslFlags',c.c_uint),('emailFlags',c.c_uint),('objectSigningFlags',c.c_uint)]
n.__CERT_AddTempCertToPerm.argtypes=[c.c_void_p,c.c_char_p,c.POINTER(Trust)];n.__CERT_AddTempCertToPerm.restype=c.c_int
for name in ['nebula-dns','nebula-mitmproxy','mitmproxy-ca-cert','chaussette']:
 b=open('/usr/local/share/ca-certificates/'+name+'.crt','rb').read();cert=sm.CERT_DecodeCertFromPackage(b,len(b));print(name,bool(cert),n.__CERT_AddTempCertToPerm(cert,name.encode(),c.byref(Trust(0x98,0,0))))
n.NSS_Shutdown()
