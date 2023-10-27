import requests
from PIL import Image
from io import BytesIO

# Replace 'YOUR_API_KEY' with your actual NASA API key
api_key = 'YOUR_API_KEY'

# NASA APOD API URL
apod_url = f'https://api.nasa.gov/planetary/apod?api_key={api_key}'

try:
    # Send a GET request to the NASA APOD API
    response = requests.get(apod_url)

    # Check if the response is successful (status code 200)
    if response.status_code == 200:
        data = response.json()

        # Check if the media type is an image
        if data['media_type'] == 'image':
            # Get the image URL
            image_url = data['url']

            # Fetch the image content
            image_response = requests.get(image_url)

            # Check if the image request is successful
            if image_response.status_code == 200:
                # Open the image using PIL (Python Imaging Library)
                image = Image.open(BytesIO(image_response.content))

                # Save the image as a JPEG in your "images" folder
                image.save('images/apod.jpg', 'JPEG')
                print('APOD image saved as "apod.jpg" in the "images" folder.')

            else:
                print('Failed to fetch APOD image.')

        else:
            print('Today\'s APOD is not an image.')

    else:
        print('Failed to fetch APOD data.')

except Exception as e:
    print('An error occurred:', str(e))
