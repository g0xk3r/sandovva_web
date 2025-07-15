import qrcode
from urllib.parse import quote

def obtener_parametros():
    comprador = input("Ingresa el nombre del comprador: ")
    vendedor = input("Ingresa el nombre del vendedor: ")
    perfume = input("Ingresa el nombre del perfume: ")
    mililitros = input("Ingresa los mililitros del perfume: ")
    precio = input("Ingresa el precio del perfume: ")
    fecha = input("Ingresa la fecha de compra: ")
    cupon_descuento = "5%"
    return comprador, vendedor, perfume, mililitros, precio, fecha, cupon_descuento

base_url = "https://sandovva.up.railway.app"

comprador, vendedor, perfume, mililitros, precio, fecha, cupon_descuento = obtener_parametros()

url_completa = f"{base_url}/?comprador={quote(comprador)}&vendedor={quote(vendedor)}&perfume={quote(perfume)}&mililitros={quote(mililitros)}&precio={quote(precio)}&fecha={quote(fecha)}&cupon_descuento={quote(cupon_descuento)}"

qr = qrcode.QRCode(version=1, box_size=10, border=5)
qr.add_data(url_completa)
qr.make(fit=True)
img = qr.make_image(fill_color="black", back_color="white")
img.save("qr_code.png")
print("QR generado como 'qr_code.png'")