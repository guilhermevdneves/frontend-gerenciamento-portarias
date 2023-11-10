export const situacaoPortaria = Object.freeze({
  vigente: {
    value: 'vigente',
    color: '#4DAE00',
    texto: 'Vigente',
    textoNone: 'Vigente'
  },
  alterada: {
    value: 'alterada',
    color: '#E4A400',
    texto: 'Alterada pela portaria ',
    textoNone: 'Alterada',
  },
  revogada: {
    value: 'revogada',
    color: '#FF0000',
    texto: 'Revogada pela portaria ',
    textoNone: 'Revogada'
  },
  extinta: {
    value: 'extinta',
    color: '#3F3939',
    texto: 'Extinção natural',
    textoNone: 'Extinta'
  }
})

export const situacaoPortariaInput = [
  {
    value: 'vigente',
    texto: 'Vigente'
  },
  {
    value: 'alterada',
    texto: 'Alterada',

  },
  {
    value: 'revogada',
    texto: 'Revogada'
  },
  {
    value: 'extinta',
    texto: 'Extinção'
  }
];