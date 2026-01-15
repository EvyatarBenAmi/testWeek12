import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Item } from './item.model';

@Injectable()
export class BusinessService {
    constructor(@InjectModel(Item) private itenModel: typeof Item) { }

    async purchaseItems({ name, item, quantity, pricePerUnit }) {
        const findItemByName = this.itenModel.findOne({ where: {name} })
        if (!findItemByName) {
            return await this.itenModel.create({
                name,
                item,
                quantity,
                pricePerUnit,
                hasImage: false
            })
        }
        // findItemByName.quantity += quantity
    }

    sellItem({ id, quantity }){
        const findItemByID = this.itenModel.findOne({ where: {id} })
        
    }

}
