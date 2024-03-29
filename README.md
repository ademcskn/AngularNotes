# Recapproject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Notlarım

- angular projesini çalıştırmak için ng serve --open diyoruz.
- component oluşturmak için vs code da klasöre sağ tıkla Open in Integrated Terminal diyerek termimanalde yola ulaşıyoruz. Sonra ng g component product diyerek product isminde component oluşturuabiliriz.
- service oluşturmak için service klasörünü terminalde açtıktan sonra ng g service rental diyerek rental service i açabiliriz.
- app.module.ts dosyasına eklenen componentler import ediliyor.
- main.ts dosyasında hangi modulden başlacağını söylüyoruz.
- \*ngFor gibi elementler directive dir. html elementini manipüle ediyor. ngFor ise elementi tekrarla demek.
- terminale npm install bootstrap diyerek kurulum yapabiliyoruz. yolun bir önemi yok.
- yeni paket kurduktan sonra sonuçları görebilmek için yayını durdurup tekrar yayınlıyoruz.
- angular ile apiye istekte bulunmak için gerekli ayarlar yapıldı.
- api de cors izni için startup dosyasına cors ayarı eklendi.
- httpClient ile api isteğinde bulunabilmek için app-module de HttpClient ı import etmeliyiz imports da da gösterilmesi lazım.
- currentBrand: Brand; gibi bir değişkene direkt interface i atadığımız zaman new leme yapmadığımız için hata alıyoruz. New lemek için class a ihtiyaç olduğundan gerek duymadık. Bu hatayı gidermek için tsconfig.json dosyasında -- "strictPropertyInitialization": false -- değerini false yaptık.
- component deki bilgilere göre html tarafında property değiştirmek istersek ilgili prop u köşeli parantez içine alıyoruz. [class] gibi...
- angular [()] ifadesine banana notation denir. html tarafına bind etmek için kullanıyoruz. örnek kullanım [(ngModel)]="filterText". (two way binding)
- [(ngModel)] input da çalışması için app.modules.ts ye FormsModule ü import ettik.
- FormsModule olarak da importlara ekledik
- tsconfig.json dosyasına "strictPropertyInitialization": false olarak ekledik nesneyi initializer etmemek için. (newlememek için)
- pipe lar elimizdeki veriyi daha farklı biçimde göstermemize yarıyor. örn. uppercase gibi
- notification için npm install ngx-toastr kurduk. Bu paket anguların animasyon paketini de kullanabildiği için npm install @angular/animations da kurduk. daha sonra angular.json dosyasında style kısmına ekliyoruz. daha sonra app.module kısmına da ekliyoruz. kullanmak istediğimiz html in cs dosyasında constructor kısmına service olarak da ekliyoruz.
- angular da html de href yok
- null gelebilir hatası için tsconfig.json dosyasına "strictNullChecks": false, ekledik
