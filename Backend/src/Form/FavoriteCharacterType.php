<?php

namespace App\Form;

use App\Entity\FavoriteCharacter;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FavoriteCharacterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('image')
            ->add('created')
            ->add('edited')
            ->add('name')
            ->add('height')
            ->add('mass')
            ->add('hair_color')
            ->add('skin_color')
            ->add('eye_color')
            ->add('birth_year')
            ->add('gender')
            ->add('homeworld')
            ->add('films')
            ->add('species')
            ->add('vehicles')
            ->add('starships')
            ->add('url')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => FavoriteCharacter::class,
        ]);
    }
}
