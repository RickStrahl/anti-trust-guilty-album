dotnet build -c Release

mkdir ..\updates -force
Copy-Item .\bin\Release\net8.0\AlbumObjects.dll ..\updates\AlbumObjects.dll -force 
