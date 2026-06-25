from PIL import Image, ImageDraw, ImageFont

def create_banner():
    # 1. Canvas Dimensions (LinkedIn standard 4:1 banner)
    w, h = 1584, 396
    
    # 2. Base canvas with deep charcoal #050505
    img = Image.new("RGB", (w, h), "#050505")
    draw = ImageDraw.Draw(img)

    # 3. Draw a subtle, premium tech dot-grid pattern in the background
    # This adds a clean, professional modern tech theme (Vercel/Linear style)
    dot_color = "#181818" # Extremely subtle gray
    dot_spacing = 36
    for x in range(dot_spacing, w, dot_spacing):
        # Leave the profile picture zone (bottom-left) fully solid and clear
        if x < 400:
            y_start = 0
            y_end = h - 160  # Keep top-left dot grid, leave bottom-left blank
        else:
            y_start = 0
            y_end = h
            
        for y in range(y_start, y_end, dot_spacing):
            # Draw a 2x2 px round dot
            draw.ellipse([x - 1, y - 1, x + 1, y + 1], fill=dot_color)

    # 4. Load premium Fira Sans fonts
    font_path_bold = "/usr/share/fonts/TTF/FiraSans-Bold.ttf"
    font_path_regular = "/usr/share/fonts/TTF/FiraSans-Regular.ttf"
    
    font_main = ImageFont.truetype(font_path_bold, 44)
    font_sub = ImageFont.truetype(font_path_regular, 24)
    font_btn = ImageFont.truetype(font_path_bold, 17)

    # 5. Position text elements (Left-aligned, shifted right to clear profile picture)
    text_x = 440
    
    # Main Headline
    draw.text((text_x, 115), "I build production-grade AI & Automation.", font=font_main, fill="#EDEDED")
    
    # Sub-text with electric blue accents
    draw.text((text_x, 185), "Next.js   |   Python   |   n8n   |   Computer Vision", font=font_sub, fill="#3B82F6")

    # 6. Bottom-Right Action Element Button
    btn_text = "View My Work: linktr.ee/kirtagya"
    
    # Measure button text bounds
    bbox = font_btn.getbbox(btn_text)
    btn_text_w = bbox[2] - bbox[0]
    btn_text_h = bbox[3] - bbox[1]
    
    # Button Padding and Size
    pad_x, pad_y = 26, 14
    btn_w = btn_text_w + (pad_x * 2)
    btn_h = btn_text_h + (pad_y * 2)
    
    # Positioning button in the bottom right corner
    btn_x1 = w - btn_w - 80
    btn_y1 = h - btn_h - 70
    btn_x2 = w - 80
    btn_y2 = h - 70
    
    # Draw rounded button in electric blue
    draw.rounded_rectangle([btn_x1, btn_y1, btn_x2, btn_y2], radius=6, fill="#3B82F6")
    
    # Center text inside the button
    text_offset_y = bbox[1]
    draw.text((btn_x1 + pad_x, btn_y1 + pad_y - text_offset_y), btn_text, font=font_btn, fill="#FFFFFF")

    # Save to the root of the workspace for easy user download
    output_path = "/home/kirtagya/Desktop/myPortfolio/linkedin_banner.png"
    img.save(output_path, "PNG")
    print(f"Banner successfully generated and saved to {output_path}")

if __name__ == "__main__":
    create_banner()
