from PIL import Image

# Open the image using the correct relative path
img = Image.open("project/public/Logo.png").convert("RGBA")

datas = img.getdata()
newData = []
for item in datas:
    # Detect white pixels (you can adjust the threshold)
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        # Make white pixels transparent
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save("project/public/output_image.png", "PNG")