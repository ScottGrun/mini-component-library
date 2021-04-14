import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	return (
		<DropdownWrapper>
			<NativeDropdown value={value} onChange={onChange}>
				{children}
			</NativeDropdown>
			<PresentationBit>
				{displayedValue}
				<IconWrapper>
					<Icon id="chevron-down" size="24" strokeWidth="3" />
				</IconWrapper>
			</PresentationBit>
		</DropdownWrapper>
	);
};

const DropdownWrapper = styled.div`
	position: relative;
	width: max-content;

	/* Prevent other dom elements z-index from interfering with this element */
	isolation: isolate;
`;

// Hide the nativedropdown but keep it interactable
const NativeDropdown = styled.select`
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
`;

// This is the styled "dropdown" that you see
const PresentationBit = styled.div`
	background-color: ${COLORS.transparentGray15};
	color: ${COLORS.gray700};
	font-family: Roboto;
	font-weight: normal;
	font-size: 1rem;
	line-height: 19px;
	padding: 12px 16px;
	padding-right: 52px;
	border-radius: 8px;

	/*
   Okay this is neat, use the sibiling selector with the focus attribute 
   to toggle the border around the presentation div 
  */
	${NativeDropdown}:focus + & {
		outline: 1px dotted #212121;
		outline: 5px auto -webkit-focus-ring-color;
	}

	${NativeDropdown}:hover + & {
		color: ${COLORS.black};
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 6px;
	height: 24px;
	width: 24px;
	margin: auto;
	pointer-events: none;
`;

export default Select;
