"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const index_1 = __importDefault(require("./index"));
const EXAMPLE_PLAYER = '17397256-c28c-4cad-85f2-a21768c66e67';
const EXAMPLE_PLAYERS = [
    '27c68d7f-5e40-4afa-8b6f-9df47b79e7dd',
    '63df8701-1871-4987-87d7-b55d4f1df2e9',
    '1f159bab-923a-4811-b6fa-02bfde50925a',
    'bf6a24d1-4e89-4790-a4ba-eeb2870cbf6f',
    'ea44bd36-65b4-4f3b-ac71-78d87a540b48',
    'e4034192-4dc6-4901-bb30-07fe3cf77b5e',
    'a1ed3396-114a-40bc-9ff0-54d7e1ad1718',
    '5ca7e854-dc00-4955-9235-d7fcd732ddcf',
    '75f9d874-5e69-438d-900d-a3fcb1d429b3',
    '773712f6-d76d-4caa-8a9b-56fe1d1a5a68',
    '0bb35615-63f2-4492-80ec-b6b322dc5450',
    '0d5300f6-0966-430f-903f-a4c2338abf00',
    'f741dc01-2bae-4459-bfc0-f97536193eea',
    'e16c3f28-eecd-4571-be1a-606bbac36b2b',
    '0ecf6190-f869-421a-b339-29195d30d37c',
    'd81ce662-07b6-4a73-baa4-acbbb41f9dc5',
    '10ea5d50-ec88-40a0-ab53-c6e11cc1e479',
    'd8758c1b-afbb-43a5-b00b-6004d419e2c5',
    'f0594932-8ef7-4d70-9894-df4be64875d8',
    'dfe3bc1b-fca8-47eb-965f-6cf947c35447',
    '3db02423-92af-485f-b30f-78256721dcc6',
    '6192daab-3318-44b5-953f-14d68cdb2722',
    '5149c919-48fe-45c6-b7ee-bb8e5828a095',
    '63a31035-2e6d-4922-a3f9-fa6e659b54ad',
    '937c1a37-4b05-4dc5-a86d-d75226f8490a'
];
const EXAMPLE_TEAM = '878c1bf6-0d21-4659-bfee-916c8314d69c';
const EXAMPLE_TEAMS = ['b024e975-1c4a-4575-8936-a3754a08806a', 'ca3f1c8c-c025-4d8e-8eef-5be6accbeb16'];
const EXAMPLE_LEAGUE = 'd8545021-e9fc-48a3-af74-48685950a183';
const EXAMPLE_SUBLEAGUE = '7d3a3dd6-9ea1-4535-9d91-bde875c85e80';
const EXAMPLE_SUBLEAGUES = ['7d3a3dd6-9ea1-4535-9d91-bde875c85e80', '93e58443-9617-44d4-8561-e254a1dbd450'];
const EXAMPLE_GAME = 'dc767612-eb77-417b-8d2f-c21eb4dab868';
const EXAMPLE_SEASON = 0;
const EXAMPLE_DIVISION = '765a1e03-4101-4e8e-b611-389e71d13619';
const EXAMPLE_DIVISIONS = ['7fbad33c-59ab-4e80-ba63-347177edaa2e', '765a1e03-4101-4e8e-b611-389e71d13619'];
const EXAMPLE_BONUS_ID = 'cbb567c0-d770-4d22-92f6-ff16ebb94758';
const EXAMPLE_DECREEE_ID = 'b090fdfc-7d9d-414b-a4a5-bbc698028c15';
const EXAMPLE_PLAYOFF_NUM = 0;
ava_1.default('get teams', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getAllTeams();
    t.is(res.status, 200);
}));
ava_1.default('get one division', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getDivisions(EXAMPLE_DIVISION);
    const body = yield res.json();
    t.is(res.status, 200);
    t.truthy(body);
}));
ava_1.default('get multiple divisions', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getDivisions(...EXAMPLE_DIVISIONS);
    t.is(res.status, 200);
}));
ava_1.default('get all divisions', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getAllDivisions();
    t.is(res.status, 200);
}));
ava_1.default('get globalEvents', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getGlobalEvents();
    t.is(res.status, 200);
}));
ava_1.default('get one league', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getLeagues(EXAMPLE_LEAGUE);
    t.is(res.status, 200);
}));
ava_1.default('get one subleague', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getSubLeagues(EXAMPLE_SUBLEAGUE);
    t.is(res.status, 200);
}));
ava_1.default('get multiple subleagues', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getSubLeagues(...EXAMPLE_SUBLEAGUES);
    t.is(res.status, 200);
}));
ava_1.default('get one game', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getGames(EXAMPLE_GAME);
    t.is(res.status, 200);
}));
ava_1.default('get multiple games', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getGames(EXAMPLE_GAME, EXAMPLE_GAME);
    t.is(res.status, 200);
}));
ava_1.default('get offseason setup', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getOffseasonSetup();
    t.is(res.status, 200);
}));
ava_1.default('get offseason recap', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getOffseasonRecap(EXAMPLE_SEASON);
    t.is(res.status, 200);
}));
ava_1.default('get offseason bonus results', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getOffseasonBonusResults(EXAMPLE_BONUS_ID);
    t.is(res.status, 200);
}));
ava_1.default('get offseason decree results', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getOffseasonDecreeResults(EXAMPLE_DECREEE_ID);
    t.is(res.status, 200);
}));
ava_1.default('get playoff details', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getPlayoffDetails(EXAMPLE_PLAYOFF_NUM);
    t.is(res.status, 200);
}));
ava_1.default('get one team', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getTeams(EXAMPLE_TEAM);
    t.is(res.status, 200);
}));
ava_1.default('get multiple teams', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getTeams(...EXAMPLE_TEAMS);
    t.is(res.status, 200);
}));
ava_1.default('get one player', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getPlayers(EXAMPLE_PLAYER);
    t.is(res.status, 200);
}));
ava_1.default('get multiple players', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getPlayers(...EXAMPLE_PLAYERS);
    t.is(res.status, 200);
}));
ava_1.default('get season', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getSeason(EXAMPLE_SEASON);
    t.is(res.status, 200);
}));
ava_1.default('get simulation data', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield index_1.default.getSimulationData();
    t.is(res.status, 200);
}));
