import styled from "styled-components";


const StyleButton = styled.button`
display: inline-flex;
justify-content: center;
align-item: centert;
margin: ${p=>p.theme.space[1]}px;
padding-top: ${p=> p.theme.space[3]}px;
padding-left: ${p=> p.theme.space[3]}px;
padding-right: ${p=> p.theme.space[4]}px;
padding-bottom: ${p=> p.theme.space[4]}px;
border: ${p=>p.theme.borders.normal};
border-radius: ${p=>p.theme.radii.md};
background-color: ${p=> p.disabled? p.theme.colors.muted : p.theme.colors.primary};
cursor: pointer;
color: ${p=>p.disabled? p.theme.colors.black:p.theme.colors.white};
height: 35px; 

:hover:not(:disabled),:focus:not(:disabled){
    background-color: ${p=>p.theme.colors.secondary};
}
`

export const Button = ({icon: Icon, type= 'button', children, disabled= false}) => {
    return <StyleButton type={type} disabled={disabled}>
       {Icon && <Icon size = "16px"/>}
        {children}
    </StyleButton>;
} 
