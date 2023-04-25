import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { PurchaseEntity } from './entity/purchase.entity';

@Controller()
export class AppController {
	constructor(private dbService: InMemoryDBService<any>) { }

	@Get()
	getAll(): PurchaseEntity[] {
		return this.dbService.getAll();
	}

	@Post()
	async create(@Body() dto: Partial<PurchaseEntity>): Promise<PurchaseEntity> {
		return this.dbService.create(dto);
	}

	@Post('seed')
	seed(): PurchaseEntity[] {
		this.dbService.seed(
			(idx: number) => ({
				title: `Putchase ${idx + 1}`,
				price: (idx + 1) * 10,
				date: (new Date()).toLocaleDateString(),
				comment: 'some text',
				active: false
			}),
			3
		);

		return this.dbService.getAll();
	}

	@Put(':id')
	async edit(@Body() dto: Partial<PurchaseEntity>): Promise<void> {
		return this.dbService.update(dto);
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<void> {
			await this.dbService.delete(id);
	}
}
