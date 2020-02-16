# donerci-react-apollo-graphql
React | Apollo | GraphQL
# server
1.Adım
    cd server //Server klasörü içindeyken aşağıdaki komut ile package.json dosyasını oluşturuyorum.
    //Bir takım sorular sorabilir boş geçerek default değerleri otomatik atayabilirsiniz.
    npm init
2.Adım
    Express dosyalarını server klasörü içinde indirmemiz gerekiyor.
    npm i express
3.Adım
    app.js dosyası içinde yapılan her değişikliklerde server'ı durdurup tekrar başlatmak gerekebiliyor,
    Projenin ilerleyen adımlarında bu çok can sıkıcı bir hal alıyor,bunun için nodemon 'u kullanabilirsiniz.
    Nodemon sayesinde ilgili dosyada değişklik yapıldığı ve kayıt edildiği anda otomatik server'ı kendi başlatıyor.

    npm i -g nodemon 
4.Adım
    Graphql ve express-graphql dosyalarını npm üzerinden indirip projeye eklememiz gerekiyor.
    npm i graphql express-graphql
5.Adım
    Mondodb ile ilgili paketlerin kurulması

    npm i mongoose
6.Adım
    Yapılacak çalışma için bilgisayarınıza MONGODB kurabilirsiniz ya da  cloud da ücretiz olarak sunulan bir hizmeti kullanabilirsiniz.
    Deneme amaçlı proje olacağı ve çok fazla veri yapısı olmayacağı için aşağıdaki bağlantıyı kullanarak örnek database oluşturabilirsiniz.

    https://cloud.mongodb.com/
    Mondo DB 
7.Adım
    Backend sistemi ile frontend sisteminin kullandığı portlar farklı olduğu için Chomr gibi browserlar güvenlik amacıyla dışıardan post,put gibi işlemlere kapalı olabiliyor.
    Burada chrom'un chrome web security özelliğini kapatabilirsiniz aşağıdaki örnek kodu var ama  bence en doğru npm de bulunan cors 'u kullanmak indirmek çok basit örnek kod aşağıda
    .exe --user-data-dir="C://Chrome dev session" --disable-web-security

    npm install cors



# client