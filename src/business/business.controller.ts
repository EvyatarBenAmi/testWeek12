import { Body, Controller, Post } from '@nestjs/common';
import { BusinessService } from './business.service';

@Controller('transactions')
export class BusinessController {
    constructor(private readonly businessService: BusinessService) { }

    @Post("purchase")
    purchaseItems(@Body() { name, item, quantity, pricePerUnit }) {
        // console.log(`good`);
        return this.businessService.purchaseItems({ name, item, quantity, pricePerUnit })
    }

    @Post("sell")
    sellItem(@Body() { id, quantity }) {
        return this.businessService
    }


}
