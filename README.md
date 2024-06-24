# Site para publicação de produtos e serviços

Este projeto é um protótipo de web-site para publicação de produtos e serviços, o front-end foi desenvolvido em Angular e o Back-End foi desenvolvido em dotnet core 8.

Para iniciar o front-end execute `npm start` e acesse o endereço http://localhost:4200;

Para compilar uma nova versão execute `npm run build`, a aplicação será compilada para a pasta `docs`.

A API se encontra na pasta `api/site-facu`, compile-a com `dotnet build` ou e execute-a com `dotnet run`.

É necessario criar o banco de dados em sqlite usando os comandos `dotnet tool install --global dotnet-ef` e `dotnet ef database update`.

O front-end no momento está configurado para acessar a API no endereço `https://becoming-glowworm-huge.ngrok-free.app`, altere essa configuração no arquivo `\src\api\api-config.ts` 