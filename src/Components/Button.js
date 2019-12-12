import React, { Component } from 'react';
import styled from 'styled-components';


const Button1 = styled.button`
	font-family: sans-serif;
	font-size: 1em;
	margin: 1em;
	color: ${props => props.theme.color};
	background: ${props => props.theme.background};
	border: 2px solid ${props => props.theme.color};
	border-radius: 3px;
	padding: 0.25em 1em;
	&:hover {
		background: blue;
	}
`;

export default Button1;