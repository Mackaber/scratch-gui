import React from 'react';
import {FormattedMessage} from 'react-intl';

// Tutorial thumbnails: Avoid using any text that would need to be
// translated in thumbnails.
// Intro
import libraryIntro from './thumbnails/getting-started.jpg';
import charmanderPlot from './wl_thumbnails/charmander_plot.png';

export default {

    'intro-move-sayhello': {
        name: (
            <FormattedMessage
                defaultMessage="Getting Started"
                id="gui.howtos.getting_started"
            />
        ),
        tags: ['help', 'stuck', 'how', 'can', 'say'],
        img: libraryIntro,
        steps: [{
            video: 'intro-move-sayhello'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add an Evaluate block"
                    id="gui.howtos.getting_started.step_1"
                />
            ),
            image: 'getting_started_step_1'
        }, {
            title: (
                <FormattedMessage
                    defaultMessage="Add a Current Image Block"
                    id="gui.howtos.getting_started.step_2"
                />
            ),
            image: 'getting_started_step_2'
        },{
            title: (
                <FormattedMessage
                    defaultMessage="Add a Negate Color Block"
                    id="gui.howtos.getting_started.step_3"
                />
            ),
            image: 'getting_started_step_3'
        }, {
            deckIds: [
                'charmander_plot'
            ]
        }
        ],
        urlId: 'getStarted'
    },
    'charmander_plot': {
        name: (
            <FormattedMessage
                defaultMessage="Arrows to Draw a Pokémon"
                description="This is just a test"
                id="gui.howtos.test"
            />
        ),
        tags: ['Graphics', 'Plots', 'Colors'],
        img: charmanderPlot,
        steps: [
            {
                title: (
                    <FormattedMessage
                        defaultMessage="Draw a Charmander Plot"
                        id="gui.howtos.charmander_plot.step_1"
                    />
                ),
                image: 'charmander_plot_step_1'
            }, {
                title: (
                    <FormattedMessage
                        defaultMessage="Change the lines to Arrows, Change Color and Thickness"
                        id="gui.howtos.charmander_plot.step_2"
                    />
                ),
                image: 'charmander_plot_step_2'
            },{
                title: (
                    <FormattedMessage
                        defaultMessage="Add some Random color to distinguish the lines"
                        id="gui.howtos.charmander_plot.step_3"
                    />
                ),
                image: 'charmander_plot_step_3'
            },{
                title: (
                    <FormattedMessage
                        defaultMessage="You can put the functions in variables for better structure"
                        id="gui.howtos.charmander_plot.step_4"
                    />
                ),
                image: 'charmander_plot_step_4'
            }, {
                deckIds: []
            }
        ],
        urlId: 'charmander_plot'
    }
};
