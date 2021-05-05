export * from './auth.service';
import { AuthService } from './auth.service';
export * from './botcontrol.service';
import { BotcontrolService } from './botcontrol.service';
export * from './candleData.service';
import { CandleDataService } from './candleData.service';
export * from './default.service';
import { DefaultService } from './default.service';
export * from './info.service';
import { InfoService } from './info.service';
export * from './locks.service';
import { LocksService } from './locks.service';
export * from './pairlist.service';
import { PairlistService } from './pairlist.service';
export * from './strategy.service';
import { StrategyService } from './strategy.service';
export * from './trading.service';
import { TradingService } from './trading.service';
export const APIS = [AuthService, BotcontrolService, CandleDataService, DefaultService, InfoService, LocksService, PairlistService, StrategyService, TradingService];