import { fireEvent } from '@testing-library/react-native'
import React from 'react'
import { GameResult } from '../gameResult.component'
import { render } from '../../utils/testHelpers'

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native')

  RN.UIManager.measureInWindow = (_node, callback) => {
    callback(0, 0, 42, 42)
  }

  RN.Linking = {
    openURL: jest.fn(),
  }

  return RN
})

const defaultProps = {
  game: {
    awayGoals: 0,
    homeGoals: 2,
    scorers: [
      {
        time: '18:20',
        period: '1st',
        scorer: {
          player: {
            fullName: 'Kendrick Lamar',
          },
        },
        assist: [
          {
            player: {
              fullName: 'Kanye West',
            },
            personInfo: {
              id: '1337',
            },
          },
          {
            player: {
              fullName: 'J. Cole',
            },
            personInfo: {
              id: '1338',
            },
          },
        ],
      },
      {
        time: '12:20',
        period: '3rd',
        scorer: {
          player: {
            fullName: 'Lil peep',
          },
        },
        assist: [
          {
            player: {
              fullName: 'Juice Wrld',
            },
            personInfo: {
              id: '1339',
            },
          },
          {
            player: {
              fullName: 'Travis Scott',
            },
            personInfo: {
              id: '1336',
            },
          },
        ],
      },
    ],
    stars: [
      {
        fullName: 'Yung Lean',
        id: '1335',
        image: 'theimage',
      },
      {
        fullName: 'Lil Tracy',
        id: '1334',
        image: 'theimage',
      },
      {
        fullName: 'Chance The Rapper',
        id: '1334',
        image: 'theimage',
      },
    ],
  },
}

const setup = (customProps = {}) => {
  const props = {
    ...defaultProps,
    ...customProps,
  }

  return render(<GameResult {...props} />)
}

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

beforeEach(jest.clearAllMocks)

test('it shows goals for away and home team', () => {
  const screen = setup()
  expect(screen.getByText('0 - 2')).toBeTruthy()
})

test('it shows goals for away and home team', () => {
  const screen = setup()
  expect(screen.getByText('0 - 2')).toBeTruthy()
})

test('it shows time of goal', () => {
  const screen = setup()
  expect(screen.getByText('1st - 18:20')).toBeTruthy()
})

test('it shows scorer', () => {
  const screen = setup()
  expect(screen.getByText('Kendrick Lamar')).toBeTruthy()
})

test('it shows assist', () => {
  const screen = setup()
  expect(screen.getByText('Kanye West')).toBeTruthy()
  expect(screen.getByText('J. Cole')).toBeTruthy()
})

test('it shows stars', () => {
  const screen = setup()
  expect(screen.getByText('Yung Lean')).toBeTruthy()
  expect(screen.getByText('Lil Tracy')).toBeTruthy()
  expect(screen.getByText('Chance The Rapper')).toBeTruthy()
})
