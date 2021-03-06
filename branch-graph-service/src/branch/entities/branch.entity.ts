import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';


@ObjectType()
@Directive('@key(fields: "id")')
export class Branch {

  @Field((type) => ID)
  id: string

  @Field()
  name: string

  @Field()
  address: string

  @Field()
  contactNo: string
}
