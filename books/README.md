# Premium Book Library

This directory is used to store PDF books for the Track Your Study application's enhanced book reader.

## Enhanced UI Features

The book reader has been upgraded with premium visual effects:

- **Rich Gradient Backgrounds** for a visually pleasing experience
- **Glowing Effects** on hover for interactive elements
- **Realistic Page-Turning Animations** with Framer Motion
- **Dynamic First-Page Thumbnails** generated from your PDF files
- **Elegant Progress Indicators** showing your reading progress
- **Mobile-Optimized Touch Controls** for seamless navigation

## How to Add Books

1. Place your PDF files directly in this directory.
2. Make sure the file names match the `filename` field in the `index.json` file.
3. The `index.json` file contains metadata for all books, including:
   - title
   - author
   - filename (must match the actual PDF file)
   - category
   - description
   - coverImage (URL or path to cover image)

## Example Book Entry in index.json

```json
{
  "id": "book-1",
  "title": "Learning JavaScript",
  "filename": "learning-javascript.pdf",
  "author": "John Smith",
  "coverImage": "learning-javascript-cover.jpg",
  "description": "A comprehensive guide to modern JavaScript programming",
  "category": "Programming",
  "tags": ["javascript", "programming", "web development"],
  "addedDate": "2023-05-15"
}
```

## Supported Formats

Currently, only PDF format is supported. Each PDF should be less than 50MB for optimal performance.

## Thumbnail Generation

The application automatically generates thumbnails from the first page of each PDF file. The premium UI includes:

- Elegant loading animations
- Beautiful hover effects
- Interactive page flipping

## Book Organization

Books can be categorized and searched by:

- Title
- Author
- Description
- Category

Each category has a stylish indicator in the interface.

## Troubleshooting

If your books are not displaying correctly:

1. Ensure the PDF file exists in this directory
2. Verify the filename in `index.json` matches exactly
3. Check that the PDF is not corrupted
4. Make sure the file size is less than 50MB

## Visual Design Notes

The premium UI uses:

- Subtle gradients for depth and contrast
- Glowing effects for interactive elements
- Frosted glass effects for modern aesthetics
- Smooth animations for page transitions
- Responsive design for all screen sizes
