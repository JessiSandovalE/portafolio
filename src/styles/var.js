import { style } from 'typestyle'

/* Colors */

export const Color = {
  white: '#ffffff',
  black: '#333333',
  darkYellow:'#f4b236',
  yellow: '#F6BD38',
  lightYellow:'#fad96e',
  lightGray: '#666666',
  gray:'#F5F5F5'


}
export const Font = {
  MegaBig: '90px',
  Big: '60px',
  minBig:'40px',
  medium: '30px',
  intermedium: '25px',
  principal: '20px',
  normal: '16px',
  micro: '14px',
  min: '11px'
}
export const button = style({
  minWidth: '150px',
  padding: '10px 0',
  textAlign: 'center',
  textDecoration: 'none',
  backgroundColor: 'transparent',
  appearance: 'none',
  borderRadius: '10px',
  border: '2px solid ',
  borderColor: Color.lightGold,
  fontFamily: 'Avenir',
  fontWeight: 'bold',
  color: Color.lightGold,
  cursor: 'pointer',
  $nest: {
    '@media screen and (max-width: 1024px)': {
      minWidth: '200px',
      fontSize: Font.principal
    },
    '@media screen and (max-width: 834px)': {
      minWidth: '150px',
      fontSize: Font.Mini
    },
  }
})

export const container = style({
  width: '100%',
  padding: '0 140px',
  boxSizing: 'border-box',
  $nest: {
    '@media screen and (max-width: 1440px)': {
      padding: '0 100px',
    },
    '@media screen and (max-width: 834px)':{
      padding: '0 20px'
    },
    '@media screen and (max-width: 600px)':{
      padding: '0 37px'
    }
  }
})

