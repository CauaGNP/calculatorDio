import { ButtonContainer } from "./style";

const Button = ( {label, onClick} ) =>  {
    return (
      <ButtonContainer onCLick={onClick}>
        {label}
      </ButtonContainer>
    );
  }

export default Button;