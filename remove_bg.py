import os
from PIL import Image, ImageFilter

def remove_background(image_path, output_path, threshold=30):
    if not os.path.exists(image_path):
        print(f"Error: {image_path} not found.")
        return

    # Open image and convert to RGBA
    img = Image.open(image_path).convert("RGBA")
    width, height = img.size
    data = img.getdata()
    
    # Create a new list for output pixel data
    new_data = list(data)
    
    # Visited set for BFS
    visited = set()
    queue = []
    
    # Add corners to the queue
    corners = [
        (0, 0), (width - 1, 0), 
        (0, height - 1), (width - 1, height - 1)
    ]
    for corner in corners:
        queue.append(corner)
        visited.add(corner)
        
    # BFS to find connected background pixels
    while queue:
        x, y = queue.pop(0)
        idx = y * width + x
        r, g, b, a = data[idx]
        
        # Check if the pixel is dark enough to be background
        # (We use a threshold for the sum or individual channels)
        if r < threshold and g < threshold and b < threshold:
            # Set alpha to 0 (fully transparent)
            new_data[idx] = (r, g, b, 0)
            
            # Check neighbors (4-connectivity)
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))
                        
    # Create new image with modified data
    img.putdata(new_data)
    
    # Save the result as a transparent PNG
    img.save(output_path, "PNG")
    print(f"Successfully processed image and saved to {output_path}")

if __name__ == "__main__":
    src = "/Users/nabilghifari/Documents/nakhasolution/phuromotor/public/assets/hero_car.png"
    dest = "/Users/nabilghifari/Documents/nakhasolution/phuromotor/public/assets/hero_car.png"
    remove_background(src, dest, threshold=35)
