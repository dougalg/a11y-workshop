import { useContext } from 'react';
import { clampNumber } from '../../util/number';
import { LevelContext } from './LevelContext';

export type HeadingProps = {
	level?: number;
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({ level, children, ...otherProps }: HeadingProps): JSX.Element => {
	const headingLevel = level === undefined ? useContext(LevelContext) : level;
	const HeadingTag = `h${clampNumber(1, 6, headingLevel)}`;
	return <HeadingTag {...otherProps}>{children}</HeadingTag>;
};
