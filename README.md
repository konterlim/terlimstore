# Terlim Store — Landing Page de Pré-Lançamento

Esta versão foi criada do zero como uma **landing page de pré-lançamento**, não como uma tela simples de manutenção.

## Estrutura correta para o GitHub Pages

O arquivo `index.html` precisa ficar **na raiz do repositório**:

```text
index.html
style.css
script.js
README.md
assets/
  logo-terlim-store.png
```

Não coloque estes arquivos dentro de outra pasta no repositório.

## WhatsApp

Abra `script.js` e troque:

```js
const WHATSAPP_NUMBER = '5500000000000';
```

pelo número da Terlim Store, somente números. Exemplo:

```js
const WHATSAPP_NUMBER = '5511999999999';
```

## Contador

Por padrão, o contador fica zerado. Para ativar, coloque uma data futura em `LAUNCH_DATE`, por exemplo:

```js
const LAUNCH_DATE = '2026-10-15T20:00:00-03:00';
```

## Importante

Os links de Instagram, Facebook e TikTok estão como `#` até você colocar os endereços oficiais da loja.
