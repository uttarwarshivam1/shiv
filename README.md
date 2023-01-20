# Practise_HR

create new folder
dotnet new sln
dotnet new classlib -o BOL
dotnet new classlib -o BLL
dotnet new classlib -o DAL
dotnet new mvc -o app
(Add references to app of BOL,DAL,BLL)
dotnet add \app.csproj reference BOL\BOL.csproj
dotnet add \app.csproj reference BLL\BLL.csproj
dotnet add \app.csproj reference DAL\DAL.csproj


now start coding
DAL
cd DAL
dotnet add package mysql.data

add bol reference to dal

BOL&DAL reference to BLl






















sudo yum update
sudo yum install git
sudo yum install docker
------------
sudo git clone "url"
ls
cd "folder name"
-----------------
sudo systemctl start docker
sudo systemctl enable docker
sudo systemctl status docker
------------
sudo docker build -t hii .
sudo docker run -d -p 8000:8000 hii
sudo docker ps

TO KILL CONTAINER.
sudo docker kill (containerid)
sudo docker ps
sudo docker rmi hii --force
