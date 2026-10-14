import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type JobDocument = HydratedDocument<Job>;

@Schema({ timestamps: true })
export class Job {
    @Prop()
    position: string;

    @Prop()
    company: string;

    @Prop()
    dateAdded: Date;

    @Prop()
    link: string;

    @Prop({
        enum: ['hybrid', 'remote', 'onSite', 'n/a'],
        default: 'n/a',
    })
    remote: string;

    @Prop()
    language: string;

    @Prop({
        enum: ['new', 'applied', 'expired', 'interviewing', 'rejected', 'closed'],
        default: 'new',
    })
    status: string;

    @Prop()
    applied: boolean;

    @Prop(raw({
        amount: { type: Number },
        currency: { type: String, required: true },
    }))
    salary: Record<string, any>;

    @Prop()
    comment: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);