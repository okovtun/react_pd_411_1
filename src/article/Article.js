import './Article.css';
import male from '../icons/male.png';
import female from '../icons/female.png';

function Article(props)
{
    let {db} = props;
    return(
      <div className='app'>
        {
          Object.keys(db).map(
            elem =>
            {
              return (
                <div key={elem} className='card'>
                  <img src={db[elem].photo} alt="photo" />
                  <div className='name'>
                    {db[elem].name} {db[elem].surname}
                  </div>
                  <div className='gender'>
                    <img src={db[elem].pol === 'male' ? male : female } alt="Gender"/>
                  </div>
                  <div className='age'>
                    {db[elem].age}
                  </div>
                </div>
              )
            }
          )
        }
      </div>
    );

    // return(
    //     <article>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odit voluptatibus porro tempora, accusantium impedit minus natus at facere ratione saepe aliquid iusto, deserunt numquam architecto doloremque obcaecati in. Alias?
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit ab beatae consequuntur optio labore eos eaque, totam aliquam sequi magnam tempore amet itaque nemo, aut dolorem tenetur aspernatur ducimus!
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit ab beatae consequuntur optio labore eos eaque, totam aliquam sequi magnam tempore amet itaque nemo, aut dolorem tenetur aspernatur ducimus!
    //     </p>
    //     <p>
    //       Alt+Shift+Стрелка вниз - Duplicate Line
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odit voluptatibus porro tempora, accusantium impedit minus natus at facere ratione saepe aliquid iusto, deserunt numquam architecto doloremque obcaecati in. Alias?
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit ab beatae consequuntur optio labore eos eaque, totam aliquam sequi magnam tempore amet itaque nemo, aut dolorem tenetur aspernatur ducimus!
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit ab beatae consequuntur optio labore eos eaque, totam aliquam sequi magnam tempore amet itaque nemo, aut dolorem tenetur aspernatur ducimus!
    //     </p>
    //     <p>
    //       Alt+Shift+Стрелка вниз - Duplicate Line
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odit voluptatibus porro tempora, accusantium impedit minus natus at facere ratione saepe aliquid iusto, deserunt numquam architecto doloremque obcaecati in. Alias?
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit ab beatae consequuntur optio labore eos eaque, totam aliquam sequi magnam tempore amet itaque nemo, aut dolorem tenetur aspernatur ducimus!
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit ab beatae consequuntur optio labore eos eaque, totam aliquam sequi magnam tempore amet itaque nemo, aut dolorem tenetur aspernatur ducimus!
    //     </p>
    //     <p>
    //       Alt+Shift+Стрелка вниз - Duplicate Line
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odit voluptatibus porro tempora, accusantium impedit minus natus at facere ratione saepe aliquid iusto, deserunt numquam architecto doloremque obcaecati in. Alias?
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit ab beatae consequuntur optio labore eos eaque, totam aliquam sequi magnam tempore amet itaque nemo, aut dolorem tenetur aspernatur ducimus!
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit ab beatae consequuntur optio labore eos eaque, totam aliquam sequi magnam tempore amet itaque nemo, aut dolorem tenetur aspernatur ducimus!
    //     </p>
    //     <p>
    //       Alt+Shift+Стрелка вниз - Duplicate Line
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odit voluptatibus porro tempora, accusantium impedit minus natus at facere ratione saepe aliquid iusto, deserunt numquam architecto doloremque obcaecati in. Alias?
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit ab beatae consequuntur optio labore eos eaque, totam aliquam sequi magnam tempore amet itaque nemo, aut dolorem tenetur aspernatur ducimus!
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit ab beatae consequuntur optio labore eos eaque, totam aliquam sequi magnam tempore amet itaque nemo, aut dolorem tenetur aspernatur ducimus!
    //     </p>
    //     <p>
    //       Alt+Shift+Стрелка вниз - Duplicate Line
    //     </p>
    //   </article>
    // );
}

export default Article;