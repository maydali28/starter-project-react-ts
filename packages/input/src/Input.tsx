import * as React from "react";
import styled from "styled-components";

export interface ILabelProps {
  labelWidth?: number;
}

export interface IInputWithLabelProps extends ILabelProps {
  id?: string;
  label?: string;
}

export interface IInputWithoutLabelProps extends ILabelProps {
  id: string;
  label: string;
}

export type InputLabelProps = IInputWithLabelProps | IInputWithoutLabelProps;

export interface IInputProps {
  name?: string;
  type?: string;
}

const Wrapper = styled.div`
  display: flex;
  margin: 10px;
`;

const NativeInput = styled.input`
  width: 100%;
`;

export const Input: React.SFC<IInputProps & InputLabelProps> = ({
  label,
  id,
  labelWidth,
  ...rest
}) => (
  <Wrapper>
    <NativeInput id={id} {...rest} />
  </Wrapper>
);

Input.defaultProps = {
  type: "text",
};
