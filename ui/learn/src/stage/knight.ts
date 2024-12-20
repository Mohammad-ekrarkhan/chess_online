import { arrow, assetUrl, pieceImg, toLevel } from '../util';
import type { StageNoID } from './list';

const stage: StageNoID = {
  key: 'knight',
  title: i18n.learn.theKnight,
  subtitle: i18n.learn.itMovesInAnLShape,
  image: assetUrl + 'images/learn/pieces/N.svg',
  intro: i18n.learn.knightIntro,
  illustration: pieceImg('knight'),
  levels: [
    {
      goal: i18n.learn.knightsHaveAFancyWay,
      fen: '8/8/8/8/4N3/8/8/8 w - -',
      apples: 'c5 d7',
      nbMoves: 2,
      shapes: [arrow('e4c5'), arrow('c5d7')],
    },
    {
      goal: i18n.learn.grabAllTheStars,
      fen: '8/8/8/8/8/8/8/1N6 w - -',
      apples: 'c3 d4 e2 f3 f7 g5 h8',
      nbMoves: 8,
    },
    {
      goal: i18n.learn.grabAllTheStars,
      fen: '8/2N5/8/8/8/8/8/8 w - -',
      apples: 'b6 d5 d7 e6 f4',
      nbMoves: 5,
    },
    {
      goal: i18n.learn.knightsCanJumpOverObstacles,
      fen: '8/8/8/8/5N2/8/8/8 w - -',
      apples: 'e3 e4 e5 f3 f5 g3 g4 g5',
      nbMoves: 9,
    },
    {
      goal: i18n.learn.grabAllTheStars,
      fen: '8/8/8/8/8/3N4/8/8 w - -',
      apples: 'c3 e2 e4 f2 f4 g6',
      nbMoves: 6,
    },
    {
      goal: i18n.learn.grabAllTheStars,
      fen: '8/2N5/8/8/8/8/8/8 w - -',
      apples: 'b4 b5 c6 c8 d4 d5 e3 e7 f5',
      nbMoves: 9,
    },
  ].map(toLevel),
  complete: i18n.learn.knightComplete,
};
export default stage;
