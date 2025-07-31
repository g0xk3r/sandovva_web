import qrcode
import os
from urllib.parse import quote

def obtener_parametros():
    comprador = input("Ingresa el nombre del comprador: ")
    vendedor = input("Ingresa el nombre del vendedor: ")
    perfume = input("Ingresa el nombre del perfume: ")
    mililitros = input("Ingresa los mililitros del perfume (solo numero): ")
    precio = input("Ingresa el precio del perfume (solo numero): ")
    fecha = input("Ingresa la fecha de compra dd-mm-aaaa: ")
    cupon_descuento = "5%"
    return comprador, vendedor, perfume, mililitros, precio, fecha, cupon_descuento

base_url = "https://sandovva.up.railway.app"

comprador, vendedor, perfume, mililitros, precio, fecha, cupon_descuento = obtener_parametros()

url_completa = f"{base_url}/?comprador={quote(comprador)}&vendedor={quote(vendedor)}&perfume={quote(perfume)}&mililitros={quote(mililitros)}&precio={quote(precio)}&fecha={quote(fecha)}&cupon_descuento={quote(cupon_descuento)}"

os.makedirs("qr_solds", exist_ok=True)

qr = qrcode.QRCode(version=1, box_size=10, border=5)
qr.add_data(url_completa)
qr.make(fit=True)
img = qr.make_image(fill_color="black", back_color="white")
img.save(f"qr_solds/qr_{fecha}.png")
print(f"QR generado como 'qr_solds/qr_{fecha}.png'")
print(f"URL generada: {url_completa}")