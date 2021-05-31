<?php

namespace App\Controller;

use App\Entity\FavoriteCharacter;
use App\Form\FavoriteCharacterType;
use App\Repository\FavoriteCharacterRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class FavoriteCharacterController extends AbstractApiController
{
    public function index(FavoriteCharacterRepository $favoriteCharacterRepository): Response
    {
        return $this->json($favoriteCharacterRepository->findAll());
    }

    public function create(Request $request): Response
    {
        $form = $this->buildForm(FavoriteCharacterType::class);

        $form->handleRequest($request);

        $favoriteCharacter = $form->getData();

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($favoriteCharacter);
            $entityManager->flush();

            return $this->handleResponse([
                "message" => "Salvo com sucesso."
            ]);
        }

        return $this->handleResponse([
            "message" => "Dados inválidos.",
            "errors" => $form
        ], Response::HTTP_BAD_REQUEST);
    }

    public function find(Request $request): Response
    {
        $characterName = $request->get('name');
        $favoriteCharacter = $this->getDoctrine()->getRepository(FavoriteCharacter::class)
        ->findOneBy([
            "name" => $characterName
        ]);

        if ($favoriteCharacter) {
            return $this->handleResponse($favoriteCharacter);
        }

        return $this->handleResponse([
            "message" => "Personagem não encontrado."
        ], Response::HTTP_NOT_FOUND);
    }

    public function delete(Request $request): Response
    {
        $characterId = $request->get('id');
        $favoriteCharacter = $this->getDoctrine()->getRepository(FavoriteCharacter::class)
        ->findOneBy([
            "id" => $characterId
        ]);

        if ($favoriteCharacter) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($favoriteCharacter);
            $entityManager->flush();

            return $this->handleResponse([
                "message" => "Deletado com sucesso."
            ]);
        }

        return $this->handleResponse([
            "message" => "Personagem não encontrado."
        ], Response::HTTP_NOT_FOUND);
    }
}
