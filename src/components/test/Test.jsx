
import { defineComponent, h } from 'vue';
import { useStore } from '../../store';

export default defineComponent({
    
  setup(props, context){
        const store = useStore();
        const count = store.counter;
        console.log(count);
            return ()=>
                (            
                <div>
                    {count}
                </div>
                )
        }

    
}
);

