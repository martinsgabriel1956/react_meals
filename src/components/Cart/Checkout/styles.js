import styled from 'styled-components'

export const Container = styled.form`
  margin: 1rem 0;
  height: 17rem;
  overflow: auto;
`

export const Control = styled.div`
  margin-bottom: 0.5rem;

  label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }

  input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20rem;
    max-width: 100%;
  }
`
