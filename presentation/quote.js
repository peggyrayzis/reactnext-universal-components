import React, { Component } from 'react';
import { Slide, BlockQuote, Quote, Link, Cite } from 'spectacle';

export default class QuoteSlide extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      quote,
      author,
      link,
      colors,
      notes,
      textSize = '1.3em',
    } = this.props;
    return (
      <Slide bgColor="primary" notes={notes}>
        <BlockQuote>
          <Quote
            lineHeight={1.6}
            textColor="secondary"
            textSize={textSize}
            style={{
              lineHeight: 1.3,
              borderLeft: `2px solid ${colors.quartenary}`,
              fontWeight: 'none',
            }}
          >
            {quote}
          </Quote>
          <Link href={link}>
            <Cite textColor="tertiary">{author}</Cite>
          </Link>
        </BlockQuote>
      </Slide>
    );
  }
}
