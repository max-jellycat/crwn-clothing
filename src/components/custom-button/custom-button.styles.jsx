import styled, { css } from 'styled-components'

const buttonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
  }
`

const invertedStyles = css`
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    color: white;
  }
`

const googleSignInStyles = css`
  background-color: #4285f4;
  border-color: #4285f4;
  color: white;

  &:hover {
    background-color: #375ae8;
  }
`

const getButtonStyles = props => {
  if (props.isGoogleSignIn) return googleSignInStyles

  return props.inverted ? invertedStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  transition: 300ms all ease;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  ${getButtonStyles}

  span {
    margin-right: 10px;

    &:only-child {
      margin-right: 0;
    }
  }
`