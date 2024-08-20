import { CanActivateFn } from '@angular/router';
import { StockInfoService } from 'src/app/service/stock-info.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const service = new StockInfoService();
  const user = service.getuserinfo()! ;
  return true;
};
