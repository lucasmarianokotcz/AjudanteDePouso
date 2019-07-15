# AjudanteDePouso
Projeto Ajudante de Pouso para aviação.

## Objetivo
Ajudar o piloto na hora do pouso de um voo.

__Entradas:__
- Rumo da pista (maior que 0° e menor ou igual a 360°);
- Circuito (tipo): padrão ou não-padrão.

__Saídas:__
- Rumo perna do vento (maior que 0° e menor ou igual a 360°);
- Rumo +-45° p/ entrar na perna do vento;
- Posição em relação à pista/aeroporto em que o avião deve começar + posição cardeal.

__Exemplo:__
##### Entrada:
	Rumo da pista: 90°
	Circuito: padrão
##### Processamento:
	Perna do vento: 90° + 180° = 270°
	Rumo de entrada perna do vento: 270° - 45° = 225°
	Posição pista + cardeal: 225° - 180° = 45°
##### Saída:
	Perna do vento: 270°
	Rumo perna do vento: 225°
	Posição pista + cardeal: 45° NE
 
## Regras de negócio

__RN001 – Rumo da pista:__ 
- Deve ser um número inteiro maior que 0 e menor ou igual a 360.
- É expresso em graus (°). Na saída, é expresso com 3 dígitos (ex.: 003°, 055°, 233°).

__RN002 – Circuito:__
- Deve ser selecionado se o circuito é padrão ou não-padrão.
- Se for padrão, o rumo para entrada na perna do vento é -45°, se for não-padrão, é +45°.

__RN003 – Perna do vento:__
- É o cálculo do Rumo da pista na direção contrária. Ou seja, se for entre 1 e 180, soma 180° ao Rumo da pista, e se for entre 181 a 360, diminui 180° ao Rumo da pista.
- Dependências: Rumo da pista.
- Exemplo 1: Rumo da pista = 153°. Logo, Perna do vento = 153° + 180° = 333°.
- Exemplo 2: Rumo da pista = 215°. Logo, Perna do vento = 215° - 180° = 035°.

__RN004 – Rumo de entrada da perna do vento:__
- É a soma ou subtração de 45° na perna do vento. Se o circuito for padrão, diminui 45°, se for não-padrão, soma 45°.
- Dependências: Circuito; Perna do vento.
- Exemplo 1: Circuito padrão; Rumo da pista = 060°; Perna do vento: 240°; Rumo de entrada da perna do vento = 240° - 45° = 195°.
- Exemplo 2: Circuito não-padrão; Rumo da pista: 200°; Perna do vento: 020°; Rumo de entrada da perna do vento: 20° + 45° = 065°.

__RN005 – Posição em relação a pista:__
- É o cálculo do rumo de entrada da perna do vento invertido. Ou seja, se o rumo de entrada da perna do vento for entre 1 e 180, soma 180°, se for entre 181 a 360, diminui 180°.
- Dependências: Rumo de entrada da perna do vento.
- Exemplo 1: Rumo de entrada da perna do vento = 183°; Logo, Posição em relação a pista = 183° - 180° = 003°.
- Exemplo 2: Rumo de entrada da perna do vento = 055°; Logo, Posição em relação a pista = 55° + 180° = 235°.

__RN006 – Posição cardeal:__
- Representa a posição cardeal da posição em relação a pista.
- Dependências: Posição em relação a pista.
- Possibilidades: N, NE, E, SE, S, SO, O, NO.
- Regras para posição cardeal:
>- N = 337 a 21
>- NE = 22 a 66
>- E = 67 a 111
>- SE = 112 a 156
>- S = 157 a 201
>- SO = 202 a 246
>- O = 247 a 291
>- NO = 292 a 336
- Exemplo 1: Posição em relação a pista = 060°; Logo, Posição Cardeal = NE; Resultado final = 060° NE.
- Exemplo 2: Posição em relação a pista = 180°; Logo, Posição Cardeal = S; Resultado final = 180° S.

__RN007 – Formatações:__
- Todo rumo é expresso em graus de três algarismos de 1 a 360. Exemplo: 055°.
- Saída de dados:
>- “O rumo da perna do vento é: xxx°.”
>- “O rumo de entrada da perna do vento é: xxx°.”
>- “Em relação a pista, a aeronave precisa vir do <cardeal>, numa radial de xxx°.”
- O resultado deverá estar na mesma tela das informações digitadas, sem perder os dados.
