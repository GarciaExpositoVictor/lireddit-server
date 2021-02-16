import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post {
  @Field(() => Int)
  @PrimaryKey()
  id!: number;
  
  @Field(() => String)
  @Property({ type: Date, default: new Date().getDate() })
  createdAt = new Date();
  
  @Field(() => String)
  @Property({ type: Date, onUpdate: () => new Date(), default: new Date().getDate() })
  updatedAt = new Date();

  @Field(() => String)
  @Property({ type: "text", default: '' })
  title!: string;
}
