import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
    @Query(() => String)
    hello(){
        return "ahora digo otra cosa"
    }
}