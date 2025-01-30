# Install Sharp.js globally if not already installed
# npm install -g sharp-cli

# Define paths
$sourceDir = "..\assets\images"
$teamDir = "..\assets\images\team"

# Create team directory if it doesn't exist
if (!(Test-Path $teamDir)) {
    New-Item -ItemType Directory -Path $teamDir
}

# Team members and their source images
$members = @(
    @{
        name = "ahmed"
        source = "Ahmed.jpg"
    },
    @{
        name = "jaya"
        source = "jayaprofile.jpg"
    },
    @{
        name = "jitheesh"
        source = "jitheeshprofilepic.jpg"
    },
    @{
        name = "sandeep"
        source = "sandeepProfile.jpg"
    },
    @{
        name = "tony"
        source = "Tonyprofile.jpg"
    }
)

# Image sizes to generate
$sizes = @(400, 800, 1200)

foreach ($member in $members) {
    $memberDir = Join-Path $teamDir $member.name
    
    # Create member directory if it doesn't exist
    if (!(Test-Path $memberDir)) {
        New-Item -ItemType Directory -Path $memberDir
    }

    $sourcePath = Join-Path $sourceDir $member.source
    
    foreach ($size in $sizes) {
        $outputPath = Join-Path $memberDir "$($member.name)_$($size).webp"
        
        # Use sharp-cli to process the image
        sharp $sourcePath `
            --resize $size $(($size * 4) / 3) `
            --format webp `
            --quality 85 `
            --output $outputPath
        
        Write-Host "Created $outputPath"
    }
}

Write-Host "Image processing complete!"