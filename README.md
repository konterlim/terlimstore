# Terlim Store — Página de manutenção

Página estática pronta para publicar no GitHub Pages enquanto o WordPress/LocalWP permanece local.

## 1. Antes de publicar
Abra `script.js` e altere:

- `WHATSAPP_NUMBER`: número da Terlim com DDI, somente números.
- `CONTACT_EMAIL`: e-mail real.
- `LAUNCH_DATE`: data/hora prevista para o lançamento.

Exemplo:
`5511999999999`

## 2. Publicar no GitHub Pages
1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta mantendo a pasta `assets`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a publicação.

## 3. Cloudflare
No Cloudflare, mantenha o domínio apontado para o GitHub Pages enquanto o WordPress ainda está no LocalWP.

Depois, quando o site WordPress estiver pronto para produção, você pode substituir os registros/destino pelos dados do seu servidor de produção.

### Observação
O formulário desta versão abre o WhatsApp com a mensagem preenchida. Não exige banco de dados nem hospedagem PHP.
