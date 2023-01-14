import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  
  > .product {
    max-width: 45rem;
    display: flex;
    flex-direction:  column;

    button {
      align-self: end;
      padding-right: 5rem;
      padding-top: .8rem;
    }
  }
  
  > .description {
    width: 28rem;
    
    h1 {
      margin-top: 1.2rem;
      margin-bottom: 1.2rem;
    }
    
    button {
      margin-top: 2.8rem;
      padding: .8rem;
      width: 18rem;
      border: 1px solid ${({theme}) => theme.COLORS.VIOLET};
      border-radius: 10rem;
      text-transform: uppercase;
    }

    button:hover {
      background-color: ${({theme}) => theme.COLORS.VIOLET};
      color: ${({theme}) => theme.COLORS.GRAY};
    }

  }
`
