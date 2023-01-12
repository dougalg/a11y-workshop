import { Heading } from '../../components/Heading/Heading';
import { HeadingSection } from '../../components/Heading/HeadingSection';
import { SiteNav } from './SiteNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

export const SiteFooter = (props: React.HTMLAttributes<HTMLElement>): JSX.Element => (
	<footer {...props}>
		<HeadingSection tag="section">
			<Heading>Minerva</Heading>
			<HeadingSection>
				<Heading>The things that move us</Heading>
			</HeadingSection>
			<p>
				The stars will never align, and the traffic lights of life will never all be green at the same time. The stars
				will never align, and the traffic lights of life will never all be green at the same time.
			</p>
		</HeadingSection>
		<HeadingSection tag="section">
			<Heading id="site-nav-footer" className="screenreader-only">
				Footer Site Navigation
			</Heading>
			<SiteNav aria-labelledby="site-nav-footer" />
		</HeadingSection>
		<HeadingSection tag="section">
			<Heading id="external-links">Friends of Minerva</Heading>
			<nav aria-labelledby="external-links">
				<a href="/">Anne</a>
				<a href="/">Bob</a>
				<a href="/">jane</a>
			</nav>
		</HeadingSection>
		<HeadingSection tag="section">
			<Heading id="social-links" className="screenreader-only">
				Social Links
			</Heading>
			<nav aria-labelledby="social-links">
				<a href="/">
					<span className="screenreader-only">Facebook</span>
					<FontAwesomeIcon icon={faFacebook} />
				</a>
				<a href="/">
					<span className="screenreader-only">LinkedIn</span>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a href="/">
					<span className="screenreader-only">Twitter</span>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
			</nav>
		</HeadingSection>
	</footer>
);
