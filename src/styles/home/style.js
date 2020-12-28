import { style,keyframes } from 'typestyle'

import { Color, Font } from '../var'
const animate =  keyframes({
  '0%,10%,100%':{ width: '0'},
  '20%, 70%, 90%':{
    width:'100%'
  },
})
const jump = keyframes({

})
export const HomeStyle = style({
  display: 'flex',
  flexDirection:'column',
  width: '100%',
  fontFamily:'Helvetica',
  $nest: {
    '& .banner':{
      width: '100%',
      minHeight: '90vh',
      display: 'flex',
      justifyContent:'space-between',
      alignItems:'center',
      $nest: {
        '& .left':{
          justifySelf:'center',
          fontSize: '30px',
          position:'relative',
          marginLeft:'-40px',
          marginTop:'40px'

        },
        '& .right':{
          width: '100%',
          position:'relative',
          //padding:'0 50px',
          $nest:{
            '& .hi':{
              fontSize:Font.principal,
              color: Color.black,
              fontWeight:'600'
            },
            '& .name':{
              position:'relative',
              fontSize:Font.Big,
              color: Color.white,
              fontWeight:'600',
              '-webkit-text-stroke': '1px #333333',
              width:'50%'
            },
            '& .name:before':{
                content:'attr(data-text)',
                position:'absolute',
                top:'0',
                left:'0',
                width:'0%',
                height:'100%',
                color:Color.black,
                '-webkit-text-stroke': '0px #333333',
                borderRight:'2px solid  #333333',
                overflow:'hidden',
                //animation: 'animate 6s linear infinite'
                animationName: animate,
                animationDuration:'4s',
                animationIterationCount:'infinite'
            },
            '& .position':{
              fontSize:Font.minBig,
              color: Color.darkYellow,
              fontWeight:'600'
            },
            '& .info':{
              fontSize:Font.principal,
              color: Color.lightGray,
              paddingTop:'20px',
              width: '90%'
            },
            '& .links':{
              display: 'flex',
              marginTop: '20px',
              fontSize:Font.principal,
              color: Color.black,
              fontWeight:'600',
              marginBottom:'20px',
              $nest: {
                '& .item':{
                  display:'flex',
                  flexDirection: 'column',
                  width:'40%',
                  $nest:{
                    '& a':{
                      color: Color.lightGray,
                      fontWeight:'100',
                      textDecoration:'none',
                      cursor: 'pointer'
                    }
                  }  
                }
              }
            },
            '& .buttons':{
              width: '25%',
              $nest:{
                '& .btn':{
                  backgroundColor:Color.white,
                  color: Color.darkYellow,
                  borderColor:Color.dark,
                },
                '& :hover':{
                    backgroundPosition: '100%',
                    color: Color.white,
                    boxShadow:'0 0.2rem 3rem gray',
                    backgroundColor:Color.darkYellow,
                    borderColor:Color.darkYellow
                }
              }
            },
          }
        },
      }
    },
    '& .work':{
      width:'100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:Color.gray,
      paddingTop: '50px',
      $nest:{
        '& .title':{
          fontSize:Font.minBig,
          fontWeight:'600'
        },
        '& .cards':{
          width:'100%',
          display:'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          margin: '50px 0',
          columnGap:'20px',
          $nest:{
            '& .card':{
              width:'100%',
              height: '150px',
              backgroundColor:Color.white,
              borderRadius:'10px',
              padding:'40px',
              boxSizing:'border-box',
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center',
              boxShadow: '5px 6px 8px -6px rgba(102,102,102,1)',
              $nest: {
                '& .icon':{
                  width:'40px',
                  height:'40px',
                  backgroundColor:Color.black,
                  borderRadius:'50%',
                  position:'relative',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  $nest: {
                    '& svg':{
                      color: Color.white,
                      fontSize:Font.intermedium,
                      fontWeight:'100'
                    }
                  }
                },
                '& .yellow':{
                  backgroundColor:Color.darkYellow
                },
                '& .infoItem':{
                  width:'70%',
                  $nest:{
                    '& .titleCard':{
                      fontWeight:'600',
                      fontSize: Font.principal,
                    }
                  }
                },
              }
            },
            '& .card:hover':{
                transform:'translateY(-10px)'
            }
          }
        },
        '& .skills':{
          width:'100%',
          display:'grid',
          gridTemplateColumns:'10% 35% 50%',
          gridGap:'10px',
          alignItems:'center',
          backgroundColor:Color.gray,
          padding:'50px 0',
          $nest:{
            '& .titleSkills':{
              transform:'rotate(-90deg)',
              width:'100%',
              display:'inline-block',
              //borderBottom:'1px solid',
              //borderColor:Color.lightGray,
              textAlign:'center',
              color:Color.lightGray,
              fontSize:Font.normal
            },
            '& .titleSkills:before':{
              content: '',
              width: '70%',
              position: 'absolute',
              top: '50%',
              right: 'calc(100% + 1em)',
              height: '1px',
              backgroundColor: 'red',
              boxSizing:'border-box',
              fontSize:Font.normal
            },
            '& .list':{
              width:'100%',
              $nest:{
                '& li':{
                    margin:'20px 0',
                    listStyle:'none',
                    textTransform:'uppercase',
                    $nest:{
                      '& .bar':{
                        backgroundColor:Color.lightGray,
                        display:'block',
                        height: '2px',
                        border: '1px solid rgba(0, 0, 0, 0 ,0.3)',
                        borderRadius:'3px',
                        overflow:'hidden',
                        boxShadow:'0 0 10px #f4b236b3'
                      },
                      '& .bar span':{
                        height:'2px',
                        float: 'left',
                        backgroundColor:'#f4b236'
                      },
                      '& .html':{
                        width:'90%'
                      },
                      '& .css':{
                        width:'80%'
                      },
                      '& .javascript':{
                        width:'70%'
                      },
                      '& .angular':{
                        width:'50%'
                      },
                      '& .react':{
                        width:'60%'
                      }
                    }
                }
              }
            }
          }
        },
      }
    },
    '& p':{
      margin:'0'
    }
  },
})