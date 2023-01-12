import React from 'react';
import { Heading } from '../../components/Heading/Heading';
import { HeadingSection } from '../../components/Heading/HeadingSection';

export const HomePage = (): JSX.Element => (
	<React.Fragment>
		<HeadingSection tag="section">
			<Heading>Popular Articles</Heading>
		</HeadingSection>
		<HeadingSection tag="section">
			<Heading>Editor&lsquo;s Choice</Heading>
		</HeadingSection>
		<HeadingSection tag="section">
			<Heading>Latest Posts</Heading>
		</HeadingSection>
	</React.Fragment>
);
