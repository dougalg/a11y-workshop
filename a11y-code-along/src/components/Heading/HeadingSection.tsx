import { ElementType, HTMLAttributes, ReactNode, useContext } from 'react';
import { LevelContext } from './LevelContext';

export type HeadingSectionProps<T extends HTMLElement | undefined> = {
	children: ReactNode;
	tag?: ElementType;
} & HTMLAttributes<T>;

export const HeadingSection = <T extends HTMLElement | undefined>({
	children,
	tag: Tag,
	...otherProps
}: HeadingSectionProps<T>) => {
	const level = useContext(LevelContext);
	if (!Tag) {
		return <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>;
	}
	return (
		<Tag {...otherProps}>
			<LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
		</Tag>
	);
};
