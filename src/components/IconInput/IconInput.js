import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
	small: {
		fontSize: 14,
		iconSize: 16,
		borderThickness: 1,
		height: 24,
	},
	large: {
		fontSize: 18,
		iconSize: 24,
		borderThickness: 2,
		height: 36,
	},
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
	const styles = STYLES[size];

	return (
		<InputLabel>
			<VisuallyHidden>{label}</VisuallyHidden>
			<IconWrapper style={{ "--iconSize": styles.iconSize + "px" }}>
				<Icon id={icon} size={styles.iconSize} strokeWidth="2" />
			</IconWrapper>
			<Input
				{...delegated}
				style={{ "--fontSize": styles.fontSize / 16 + "rem", "--width": width + "px", "--height": styles.height / 16 + "rem", "--borderThickness": styles.borderThickness + "px" }}
			/>
		</InputLabel>
	);
};

const InputLabel = styled.label`
	display: block;
	position: relative;
	color: ${COLORS.gray700};

	&:hover {
		color: ${COLORS.black};
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	height: var(--iconSize);
`;

const Input = styled.input`
	width: var(--width);
	height: var(--height);
	border: none;
	border-bottom: solid var(--borderThickness) ${COLORS.black};
	padding-left: var(--height);
	color: inherit;
	font-weight: 700;
	font-size: var(--fontSize);
	outline-offset: 2px;

	&::placeholder {
		color: ${COLORS.gray500};
		font-weight: 400;
	}
`;

export default IconInput;
