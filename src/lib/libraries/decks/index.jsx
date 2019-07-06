import React from 'react';
import {FormattedMessage} from 'react-intl';

// Tutorial thumbnails: Avoid using any text that would need to be
// translated in thumbnails.
// Intro
import libraryIntro from './thumbnails/getting-started.jpg';

export default {

    'intro-move-sayhello': {
        name: (
            <FormattedMessage
                defaultMessage="Getting Started"
                description="Name for the 'Getting Started' how-to"
                id="gui.howtos.intro-move-sayhello-hat.name"
            />
        ),
        tags: ['help', 'stuck', 'how', 'can', 'say'],
        img: libraryIntro,
        steps: [{
            video: 'intro-move-sayhello'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add a move block"
                    description="Step name for 'Add a move block' step"
                    id="gui.howtos.intro-move.step_stepMove"
                />
            ),
            image: 'introMove'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Click the green flag to start"
                    description="Step name for 'Add A Say Block' step"
                    id="gui.howtos.add-a-move-block.step_stepMoveSayHello"
                />
            ),
            image: 'introSayHello'
        }, {
            deckIds: [
                'test'
            ]
        }
        ],
        urlId: 'getStarted'
    },
    'draw_pokemons': {
        name: (
            <FormattedMessage
                defaultMessage="Draw the lines of a Pokemons"
                description="This is just a test"
                id="gui.howtos.test"
            />
        ),
        tags: ['Graphics','Plots','Colors'],
        img: libraryIntro,
        steps: [{
            video: 'intro-move-sayhello'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Draw a Charmander Plot"
                    id="gui.howtos.intro-move.draw_plot"
                />
            ),
            image: 'draw-plot'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Click the green flag to start"
                    description="Step name for 'Add A Say Block' step"
                    id="gui.howtos.add-a-move-block.step_stepMoveSayHello"
                />
            ),
            image: 'introSayHello'
        }, {
            deckIds: [
                'add-a-backdrop',
                'add-sprite'
            ]
        }
        ],
        urlId: 'test'
    }
};
